# Employee-Form

<div id="top"></div>

<!-- PROJECT LOGO -->
</br>
<div style= "text-align:center;cursor: default;">
    <img target="blank" src="https://www.coachingpositiveperformance.com/wp-content/uploads/2015/11/rsz_contextualised-lists.png" alt="Logo" width="80" height="80">
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <ul>
    <li><a href="#assignment">Assignment</a></li>
    <li><a href="#background">Background</a></li>
    <li><a href="#requirements">Requirements</a></li>
    <li><a href="#architecture">Architecture</a></li>
        <li><a href="#built-with">Built With</a></li>
          <ul>
        <li><a href="#ide">IDE</a></li>
        <li><a href="#frameworks-platforms-and-libraries">Frameworks, Platforms and Libraries</a></li>
        <li><a href="#languages">Languages</a></li>
        <li><a href="#deployment">Deployment</a></li>
          </ul>        
      </ul>
    </li>
  </ol>
</details>
</br>

<p style= "text-align:right">(<a href="#top">back to top</a>)</p>

## Assignment

- Your task is to build the front side of the form for the employee.

<p style= "text-align:right">(<a href="#top">back to top</a>)</p>

## Background

- Congratulations, you are the CEO of the successful human resources company .
- The company has many employees with the same position in different parts of the country and around the world (all workers are Paramedics).
- Each employee's day begins with filling out a manual form that includes his or her personal details, workplace, and inventory list at the current workplace.
- Following the growth of the company, there is a need to upgrade to a smarter system that will give every employee the opportunity to fill out the form online and submit it.

<p style= "text-align:right">(<a href="#top">back to top</a>)</p>

## Requirements

- [x] Build a `create-react-app and name it`.
- [x] Working with React and a logical division into components.
- [x] Create two states, one for the employee details and one for the list of current equipment in the employee's workplace.
- [x] An employee information form will include the fields:
  - full name.
  - work place.
  - date.
- [x] A form for filling out the equipment list will contain the following for each item:
  - the name of the item.
  - the quantity that should be in the position.
  - the current quantity available in the position.
  - according to the **current quantity** and the **quantity that should be in the position** also a column that will show how many items are currently missing in the position.
  - date
- [x] Initialize the items state according to the equipment list when by default the current quantity of each product will be equal to 0.
- [x] Allow the employee to update the state of the information about him or the state of the product list using the two forms.
- [x] Create an area where the employee can add a new product that is currently in his position but is not listed in the equipment list in the first place.
- [x] Give the employee the option to remove only the products which he himself has decided to add.
- [x] Please make use of Redux.
- [x] **Bonus** - Add an area for the employee where he can sign a digital signature.

<p style= "text-align:right">(<a href="#top">back to top</a>)</p>

## Architecture

![Architecture](./images/Dictionary-Architecture.png)

<p style= "text-align:right">(<a href="#top">back to top</a>)</p>

### Built With

- #### IDE

  [![Vscode][vscode-shield]][vscode-url]

- #### Frameworks, Platforms and Libraries

  [![Nodejs][nodejs-shield]][nodejs-url]
  [![Npm][npm-shield]][npm-url]
  [![React][react-shield]][react-url]
  [![ReactRedux][react-redux-shield]][react-redux-url]
  [![ReactRouter][react-router-shield]][react-router-url]
  [![AWS][aws-shield]][aws-url]
  [![SASS][sass-shield]][sass-url]
  [![Mui][mui-shield]][mui-url]
  [![Css3][css3-shield]][css3-url]
  [![Bootstrap][bootstrap-shield]][bootstrap-url]

- #### Languages

  [![Html5][html5-shield]][html5-url]
  [![JavaScript][javascript-shield]][javascript-url]

- #### Deployment
- [x] [Employee-Form-Website](http://employeform.s3-website.us-east-2.amazonaws.com/)

<p style= "text-align:right">(<a href="#top">back to top</a>)</p>

<!-- Badges -->

<!-- build with -->

<!-- IDE -->

[vscode-url]: https://code.visualstudio.com/
[vscode-shield]: https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white

<!-- Frameworks -->
<!-- Nodejs -->

[nodejs-url]: https://nodejs.org/en/
[nodejs-shield]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=whit

<!-- Npm -->

[npm-url]: https://www.npmjs.com/
[npm-shield]: https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white

<!-- Aws-->

[aws-shield]: https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white
[aws-url]: https://aws.amazon.com/

<!--React  -->

[react-shield]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/

<!--React-redux  -->

[react-redux-shield]: https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white
[react-redux-url]: https://react-redux.js.org/

<!--React-router  -->

[react-router-shield]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
[react-router-url]: https://reactrouter.com/

<!-- Mui -->

[mui-shield]: https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=material-ui&logoColor=white
[mui-url]: https://mui.com/

<!-- Sass -->

[sass-shield]: https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white
[sass-url]: https://sass-lang.com/

<!-- Css3 -->

[css3-shield]: https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white
[css3-url]: https://en.wikipedia.org/wiki/CSS

<!-- Bootstrap -->

[bootstrap-shield]: https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white
[bootstrap-url]: https://getbootstrap.com/

<!-- Languages -->

<!-- Html5-->

[html5-url]: https://developer.mozilla.org/en-US/docs/Glossary/HTML5
[html5-shield]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white

<!-- JavaScript -->

[javascript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[javascript-shield]: https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E
