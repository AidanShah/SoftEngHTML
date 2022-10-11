# CSS

You can use [w3schools](https://www.w3schools.com/w3css/defaulT.asp) or [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS) as a reference.

## Questions

1. What does **CSS** stand for?
CSS stands for Cascading Style Sheets, used to describe the presentation of HTML or XML doc

2. Describe the syntax for writing CSS.
includes:
- selector
- property
- value

p {
  color: red;
  text-align: center;
}

3. What is a *class*? How is it different from an *ID*?
- ID is a unique identifier of the HTML element to which a particular style 
- class:  class selector is used when the same style must be applied to multiple HTML elements on the same web page

4. What is a **CSS Selector**?
points to the HTML element where you want to apply CSS style 

5. Explain the difference between these units: `px`, `em`, `vw`, `%`, `rem`.
px, em, rem: font sizing
%, vw -  margins, padding, spacing, and widths/heights
---

## Exercises

1. To learn about different CSS Selectors, play [CSS diner](https://flukeout.github.io/)! Get to at least level 14 and take a screenshot of your mastery.
2. Write out css on your team's html site. I recommend making a `styles/` directory so that each of your team members can have a separate stylesheet. Then create css files, like `<team_member_name>.css` for:
    - a. The first child of `ol` and `ul` have a different color on your individual page
    - b. Paragraphs have no padding, but vertical margins of `1.5vh`
    - c. Add a *class* to two separate HTML elements and give them a property of your choice (choose a different property than the above ones: not background-color, padding, or margins).
3. **TEAM**: Make a new css file for your whole team to share, and have all pages:
    - a. use the same font family.
    - b. Have a hover transition for links. You can change the color, size, have it flip around, whatever you want!
4. Play [Flexbox Froggy](https://flexboxfroggy.com/) - get to at least level 5.
5. **TEAM**: On your team's index page, make the links to your individual pages spread out horizontally using flexbox (actual documentation [here](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout)).

## More practice and dive into the crazy world of css, if you want 

1. Write css so that: Any element with class `Modal` is positioned directly at the center of the page and will not move when the page is scrolled.
2. [Sass](https://sass-lang.com/), programming and more with css!
3. [CSS 3D!!](https://rupl.github.io/unfold/)
