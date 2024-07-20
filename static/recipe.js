<script>
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
        let left_column = document.createElement("div");
        let right_column = document.createElement("div");

        left_column.id = "left-column";
        right_column.id = "right-column";

        let found_directions = false;
        let outer_section = document.getElementsByClassName("level1")[0];

        console.log(outer_section.id);
        console.log(outer_section.children.length);
        let children = outer_section.children;
        let left_column_elements = [];
        let right_column_elements = [];

      console.log("next")
        for (let i = 0; i < children.length; i ++) {
          console.log(children[i].id);
          console.log(i);
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

        let title = document.querySelector("h1");
        //let divider = document.createElement("hr");
        //divider.id="title-divider";

        while (outer_section.firstChild) {
            outer_section.removeChild(outer_section.lastChild);
        }

        outer_section.appendChild(title);
        //outer_section.appendChild(divider);
        outer_section.appendChild(left_column);
        outer_section.appendChild(right_column);
    }

    formatFractions();
    addColumns();
</script>
