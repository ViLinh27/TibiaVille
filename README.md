# TibiaVille

## Goal

## Notes

- What does {ref} from 'vue' do?
  - Composition API
    - reactive reference to value
    - meaning it takes in primitives inside reactive object, then when that ref.value is changed, Vue detects change and renders any templates and such using it.
  - Template attribute for direct DOM access
    - helps grab reference to HTML elmenet or child component isntance after component has mounted
    - basically like a safer Vue-native alternative to document.getElmeentById() in JS

### Reference

#### Markdown reader

- found here:
  - [reddit thread](https://www.reddit.com/r/vuejs/comments/17gdryk/is_there_a_simple_way_to_render_a_markdown_file/)
  - [github of library](https://github.com/shunnNet/vue-markdown)
  - [sandbox with use](https://stackblitz.com/edit/nuxt-starter-xvieezcs?file=pages%2Findex.vue)

####

- grid use:
  - https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout
  - https://developer.mozilla.org/en-US/play?uuid=05bbddbbc325034d0cfdaa3b4731c8a6e2de1968&state=jVJLb8IwDP4rVqdJMNHR8tCgsB133WEcewkklIw2qZKWdkP899lt0LSuSDs5sr%2BHY31n71BkqRd5ay5PsEuZtc%2BxVxmW58LE3kusAH6NtBLYflNiPcb233lRaZxvKn1rfjCCFDZUb2D2uiTvVyy3EPJEIq9YbiCsrBHwLuvr%2FFq9kbezFn%2F8AGdibXXtW%2FklVRLh23BhfGytYnWJ1aM7RIvMWO1XkheHCJazICcMNU0iVQQBsLLQHdoL0ErOhqQjmOQ1WJ1KDibZDibTKYRPISwWw9UPyjeMy9JGMHcmW7Y7JkaXivs7nWqU%2BU2GMcyD%2B1YiZ5w3nwlF1jQc444vZ4tg3%2FcxLm2ess8IEiN5w6GHX4gM24UgzzJTuI8RuWDFYDqCcG9au4TlaHW9RsOjQ%2FhGV0jIpMKrDcIAAaPmQkO3AOaoNW8orQMK4U%2BmP0oogj3HwGT1MCbImHUZTqVhUc76nDoc0pk7DuWvh9Jd7GpBYezbrAOfOTgm8x%2FiDo1p%2FaCwYi0OIhP45Mwcvcs3&srcPrefix=%2Fen-US%2Fdocs%2FWeb%2FCSS%2FGuides%2FGrid_layout%2F

## Debug log

- Package.json in the wrong location

- No default export
- importing raw markdown into vue files

- I need to append ?raw to the end of the import files becasue Vite expects imported files to be executable JS or some asset.
- vue-markdown package expects raw markdown string as prop
- Adding ?raw resolves error without pliugins

- typo: != is not the NOT operator in other languages, this is: = !

- putting VUeMarkdown component into separate component to reuse to avoid copy pasta
  -
