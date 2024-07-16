<a name="readme-top"></a>

<div align="center">
  <img src="NoCountryLogo.png" alt="logo" width="140"  height="auto" />
  <br/>

  <h3><b>Readme</b></h3>

</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [❓ FAQ (OPTIONAL)](#faq)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📖 A Dedo <a name="about-project"></a>

> Learn more about our project below.

**A dedo** is a platform were users can share trips and save in cost of fuel or transportation, users can create accounts as drivers or travelers.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

> Would you like to know more about the tech and tools we use in this project?

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li><a href="https://reactrouter.com/en/main">React Router</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://expressjs.com/">Express.js</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://github.com/Automattic/mongoose">ORM: Mongoose</a></li>
    <li><a href="https://www.mongodb.com/docs/">DB: MongoDB</a></li>
  </ul>
</details> 

<!-- Features -->

### Key Features <a name="key-features"></a>

> See below our key features

- **user can create an account**
- **user(driver) can share a trip**
- **user(driver) can add a price**
- **user can book a trip**
- **Trip chat available**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

> Try our live demo on the link provided below:

- [Live Demo Link](https://c18-10-t-node-react.onrender.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

> Are you a new developer and would like to know how to start?

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

- a linux terminal or similar
- node.js
- MongoDB installed and running or a MongoDB running in cloud so you can get the
URL that allows the connection.

<!--
Example command:

```sh
 gem install rails
```
 -->

### Setup

In you terminal access the folder where you want to
clone the project:

```sh
  cd my-folder
```

Clone this repository to your desired folder:

```sh
  git clone git@github.com:Diegogagan2587/A-Dedo.git
```


### Install

Install this project with the next steps:
#### Front End

open the `frontend` folder in your terminal an run:

```sh
  npm install
```

Create an `.env` file and add the base API url:
```sh
VITE_API_URL_BASE = ""
```
#### Back End
If you want to run A-dedo API in local, you need to connect it to a database,
you could connect it using the URI for a mongodb database in the cloud or run your own
instance of a database and use that one.
##### How to start MongoDB in a Linux local pc
you need to have installed mongo db already, if you are on windows and you would like 
to run MongoDB in local please refer to mongodb docs for further assistance:
1. Initialize the mongo db service
```sh
sudo systemctl start mongod
```
2. Check service status
```sh
sudo systemctl status mongod
```
The mongodb service should be running now. if you need to work with you database
from terminal please install the MongoDB CLI, once install you can initialize it running
`mongosh`.

if you would like to close the MongoDB service you can do so running `sudo systemctl stop mongod`
in your linux terminal.

##### API in Local

Open the `backend` folder in your terminal an run:

```sh
  npm install
```
In your `backend` folder create and .env file and add env variables as shown below:
```JavaScript
// your local port
PORT = 3002
// Add the URL of the DB you want to run in dev/local
URI_CONNECTION_DB_LOCAL = my/database/url/connection

```

### Usage

#### Front End
To run the project, make sure you have opened your terminal in the `frontend` folder and execute the following command:

```sh
  npm run dev
```

#### Back End
To run the Back-End, make sure you have opened your terminal in the `backend` folder and execute the following command:

```sh
  npm run start
```

### Run tests
####

To run tests, run the following command:

```sh
  npm run test
```

### Deployment
#### front-end
You can deploy the front-end using:

```sh
npm run build
```
#### back-end
you might use:
```sh
npm install
npm run start
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

> Below our beloved team members!

👤 **Author1**

- GitHub: [@githubhandle](https://github.com/githubhandle)
- Twitter: [@twitterhandle](https://twitter.com/twitterhandle)
- LinkedIn: [LinkedIn](https://linkedin.com/in/linkedinhandle)

👤 **Rocio Naomi Clause - Designer**

- Behance: [Ro Claus](https://www.behance.net/roclaus)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/rocio-naomi-claus/)

👤 **Diego Vidal Lopez - Full Stack Developer**

- GitHub: [@Diegogagan2587](https://github.com/Diegogagan2587)
- X (former Twitter): [@dieg02587](https://x.com/dieg02587)
- LinkedIn: [Diego Vidal](https://www.linkedin.com/in/diego-vidal-lopez/)
- Portfolio: [https://dvloper-z.com/](https://dvloper-z.com/)

👤 **Celina Garcés - Front End Developer**

- GitHub: [@celinagrcs](https://github.com/celinagrcs)
- LinkedIn: [Celina Garcés](https://www.linkedin.com/in/celina-garc%C3%A9s/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

> We know there are a lot of chances to improve, see below future features:

- [ ] **Embedded Map**
- [ ] **Update user documentation**
- [ ] **Share location**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/No-Country/c18-10-t-node-react/issues).

### Design

We appreciate that contributions stick to the [ "A Dedo" original design](https://www.figma.com/design/YbC0ufOAtOibXYnZdOMqz3/a-dedo?node-id=0-1&t=KKktJ5fEKnxu5gFy-0)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

> Would you like to help?

- We appreciate if you try our app and report any issues you might find in the issues page.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

> Give credit to everyone who inspired your codebase.

I would like to thank to all team members who contributed to this project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FAQ (optional) -->

## ❓ FAQ (OPTIONAL) <a name="faq"></a>

> See Frequent Ask questions below:

- **[Question_1]**

  - [Answer_1]

- **[Question_2]**

  - [Answer_2]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
