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

## Debug log

### Package.json in the wrong location

### No default export

### importing raw markdown into vue files

- I need to append ?raw to the end of the import files becasue Vite expects imported files to be executable JS or some asset.
- vue-markdown package expects raw markdown string as prop
- Adding ?raw resolves error without pliugins
