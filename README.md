# ICE-4: Scientific Data Visualization

**Course:** CSCE 5320 — Scientific Data Visualization  
**Assignment:** ICE-4 — Introduction to Web Technologies  
**Author:** Rajan Shah  

---

## 📌 Overview
This assignment demonstrates the use of **SVG, CSS, JavaScript, and D3.js** to build and visualize web-based graphics.

It is divided into three main parts:

1. **SVG + CSS**  
   - Created a custom SVG in Figma and exported it as `myArt.svg`.  
   - Built an HTML page (`index.html`) with embedded SVG.  
   - Styled the page with a custom `style.css` file.

2. **JavaScript Basics**  
   - Added a JS file (`js/example.js`) that displays an **alert box** with my name when the page loads.  
   - Verified JavaScript linking by running the webpage in a browser.

3. **CodePen + D3.js Scene**  
   - Designed a natural scene with **five different elements** using **D3.js**:  
     - Tree (Figma-style, grounded to the soil)  
     - Flower (centered between tree and cat)  
     - Cat  
     - Dog  
     - Birds  
     - Butterflies  
   - Used D3 primitives (`rect`, `circle`, `ellipse`, `polygon`, `path`) to create each element.  
   - Fixed positioning issues so the **tree is attached to the ground** and the **flower is correctly aligned**.  

---

## 📂 Project Structure

```
ICE-4/
│── index.html         # Main webpage (SVG + CSS + JS embedded)
│── style.css          # Custom stylesheet
│── js/
│   └── example.js     # JavaScript alert with my name
│── assets/
│   └── myArt.svg      # Figma-created SVG
│── screenshots/
│   ├── svg-css.png    # Screenshot of webpage with SVG + CSS
│   ├── js-alert.png   # Screenshot of JavaScript alert
│   └── d3-scene.png   # Screenshot of D3.js scene from CodePen
│── README.md          # Documentation (this file)
```

---

## ▶️ How to Run Locally
1. Clone this repo:
   ```bash
   git clone https://github.com/Rajanshah1/csce5320-ice4-web-technologies.git
   cd csce5320-ice4-web-technologies
   ```
2. Open `index.html` in a browser → webpage loads with SVG + CSS.  
3. JS alert (from `js/example.js`) will appear with my name.  
4. Visit CodePen link below to view the **D3.js scene**.  

🔗 **CodePen Project Link:** [https://codepen.io/Rajanshah1/pen/OPMJXOb](https://codepen.io/Rajanshah1/pen/OPMJXOb)

---

## 🌍 Deployment (GitHub Pages)

This project is also deployed via **GitHub Pages** for quick access:

🔗 **Live Demo:** [https://rajanshah1.github.io/csce5320-ice4-web-technologies/](https://rajanshah1.github.io/csce5320-ice4-web-technologies/)

### How it was deployed:
1. Open repo → **Settings → Pages**.  
2. Under *Source*, choose **Deploy from a branch**.  
3. Select **Branch: main**, **Folder: /** (root).  
4. Save.  
5. GitHub Actions automatically runs **Pages build and deployment**.  
6. If nothing runs, trigger redeploy:
   ```bash
   echo "<!-- redeploy -->" >> index.html
   git add index.html
   git commit -m "Trigger Pages redeploy"
   git push
   ```

---

## 🌳 D3.js Natural Scene Elements
The following elements are present in my scene:
- **Tree:** trunk + multiple canopy ellipses, shadow grounded.  
- **Flower:** stem, petals, center; positioned between cat and tree.  
- **Cat:** body, head, ears, nose, tail, legs.  
- **Dog:** body, head, ears, tail, legs.  
- **Birds:** body, wings, beak, eyes.  
- **Butterflies:** left & right wings, body, antennae.

---

## 📖 Reflection
Through this assignment, I learned:
- How to **embed SVGs** in HTML and style them with CSS.  
- Basics of **JavaScript integration** and event handling in webpages.  
- How to create **shapes with D3.js** and group/transform elements.  
- Positioning strategies (e.g., aligning the tree trunk with the ground, centering the flower between objects).  
- Sharing and testing interactive graphics in **CodePen**.  
- How to **deploy static web projects with GitHub Pages**.  

---

## ✅ Deliverables Submitted
- ✅ Screenshot of webpage with SVG + CSS (`screenshots/svg-css.png`)  
- ✅ Screenshot of JS alert box (`screenshots/js-alert.png`)  
- ✅ Screenshot of D3.js scene (`screenshots/d3-scene.png`)  
- ✅ CodePen link: [https://codepen.io/Rajanshah1/pen/OPMJXOb](https://codepen.io/Rajanshah1/pen/OPMJXOb)  
- ✅ Live GitHub Pages demo: [https://rajanshah1.github.io/csce5320-ice4-web-technologies/](https://rajanshah1.github.io/csce5320-ice4-web-technologies/)  
- ✅ README.md file (this document)  
