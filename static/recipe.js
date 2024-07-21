function formatFractions() {
    let spans = document.querySelectorAll("span");
    for(let i = 0; i < spans.length; i ++) {
        span = spans[i];
        if (span.innerHTML.includes("\\frac")) {
            container = spans[i].parentElement;
            container.innerHTML = container.innerHTML.replace(" " + span.outerHTML, span.outerHTML)
        }
    }
}

function addColumns() {
    let title = document.createElement("div");
    let left_column = document.createElement("div");
    let right_column = document.createElement("div");

    title.id = "title";
    left_column.id = "left-column";
    right_column.id = "right-column";

    let found_directions = false;
    let outer_section = document.getElementsByClassName("level1")[0];

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

formatFractions();
addColumns();
