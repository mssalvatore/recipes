<script>
    spans = document.querySelectorAll("span");
    for(var i = 0; i < spans.length; i ++) {
        span = spans[i];
        if (span.innerHTML.includes("\\frac")) {
            container = spans[i].parentElement;
            container.innerHTML = container.innerHTML.replace(" " + span.outerHTML, span.outerHTML)
        }
    }
</script>
