function formatFractions() {
    let spans = document.querySelectorAll("span");
    for(let i = 0; i < spans.length; i ++) {
        let span = spans[i];
        if (span.innerHTML.includes("\\frac")) {
            let container = span.parentElement;
            container.innerHTML = container.innerHTML.replace(" " + span.outerHTML, span.outerHTML)
        }
    }
}

var left_column = document.createElement("div");
var right_column = document.createElement("div");
var outer_section = document.getElementsByClassName("level1")[0];
var sources = document.getElementById("sources");
var notes = document.getElementById("notes");

function addColumns() {
    let title = document.createElement("div");

    title.id = "title";
    left_column.id = "left-column";
    right_column.id = "right-column";

    let found_directions = false;

    let children = outer_section.children;
    let left_column_elements = [];
    let right_column_elements = [];

    for (let i = 0; i < children.length; i ++) {
        if (children[i].tagName !== "SECTION") {
            continue;
        }

        let section = children[i];
        if (section.id == "directions") {
            found_directions = true;
        }

        if (!found_directions) {
            left_column_elements.push(section);
        } else {
            right_column_elements.push(section);
        }
    }

    left_column.append(...left_column_elements);
    right_column.append(...right_column_elements);

    let h1 = document.querySelector("h1");
    let divider = document.createElement("hr");

    while (outer_section.firstChild) {
        outer_section.removeChild(outer_section.lastChild);
    }

    title.appendChild(h1);
    title.appendChild(divider);

    outer_section.appendChild(title);
    outer_section.appendChild(left_column);
    outer_section.appendChild(right_column);
}

function contentFits() {
    return outer_section.offsetHeight < document.documentElement.clientHeight;
}

function resetColumns() {
    if (notes !== null) {
        right_column.appendChild(notes);
    }

    if (sources !== null) {
        right_column.appendChild(sources);
    }
}

function fitToPageOnPrint() {
    /*
     * This function is called when the page is printed (or the media type is changed to
     * print). If the recipe cannot fit on a single printed page, this function will
     * attempt to arrange the notes and sources in the left column. If the recipe still
     * does not fit on one page, the notes and sources will be moved back to the right
     * column.
     */
   const mql = window.matchMedia("print");
   mql.onchange = (e) => {
       if (! e.matches) {
           return;
       }

       if (contentFits()) {
           return;
       }

       if (sources !== null) {
           left_column.appendChild(sources);

           if (contentFits()) {
               return
           } else {
               resetColumns();
           }

           if (notes !== null) {
               left_column.appendChild(notes);

               if (contentFits()) {
                   return
               }

               left_column.appendChild(sources);

               if (! contentFits()) {
                   resetColumns();
               }
           }
       } else if (notes !== null) {
           left_column.appendChild(notes);

           if (! contentFits()) {
               resetColumns();
           }
       }
    };
}

formatFractions();
addColumns();
fitToPageOnPrint();
