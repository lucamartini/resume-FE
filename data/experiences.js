import { P, Ul } from "@/components/Typography";
import nwg_energia_logo from '@/public/pics/nwg_energia_logo.jpg';
import cynny_logo from '@/public/pics/cynny_logo.jpg';

export default [{
  title: 'Full stack developer',
  company: 'NWG Energia S.p.a. Società Benefit',
  duration: {
    start: 'mar 2018',
    end: null
  },
  place: 'Prato (Italy)',
  image: nwg_energia_logo,
  body: () => (<div>As a JavaScript full-stack developer, I have been hired to migrate the current LAMP stack to
    a modern architecture, and to find solutions for the company business logic.
    < Ul >
      <li> I manage the main web app of NWG (called "Vip Office"), which serves thousands of authenticated clients with different profiles.</li>
      <li>I am currently using React and Material-UI for the front-end part, and Node.js for the back-end. Communication between clients and servers is pursued via REST and GraphQL APIs.</li>
      <li>I am also working with React Native and Expo to publish NWG apps into the App Store and Google Play.</li>
      <li>I am developing internal micro-services for the back-end functionalities, that communicate through the gRPC language specifications.</li>
      <li>I am using AWS services (like S3, Lambda, DynamoDB, Amplify) to lighten the NWG server workload</li>
      <li>I'm using different solutions for storing and retrieving data: MySQL databases and noSQL: Redis and ElasticSearch.</li>
      <li>I develop in a continuous integration environment, with unit and integration tests (with jest),
        E2E tests (with Cypress and detox) and load tests (with Artillery).</li>
      <li>My preferred way of coding is TDD.</li>
      <li>The team I'm in, follows the Agile methodology to maximize our workload profit.</li>
    </Ul></div>)
}, {
  title: 'Software developer',
  company: ' CynnyCynny ',
  duration: {
    start: 'oct 2015',
    end: 'mar 2018'
  },
  place: 'Florence (Italy)',
  image: cynny_logo,
  body: () => (<div>C++ and JavaScript software developer/designer for the Cynny infrastructure.
    Specifically, I've been working on the development and implementation of:
    < Ul >
      <li> the Morphcast technology running in-browser. It is the main Cynny product. A single-page web app, fully developed in javascript ES2015. The most important third-party JS libraries used to develop it comprehend Webpack for the bundling, Karma+Jasmine for the test-driven development and Vue.js for the UI part.</li>
      <li>Morphcast creator: a desktop app written in C++11 and Qt/QML, to demonstrate the possibility for our customers to create Morphcast videos. It used the Cynny Giotto SDK (see below).</li>
      <li>Cynet: a Chord protocol for a P2P-distributed hash table on the Cynny servers, implemented as a C++ plugin for Node.js, written with libuv and Chrome V8. Its plan was to reliably serve, update and duplicate data, in an environment where many connected nodes could go frequently down. The C++/JS code was written using also CMake, Valgrind (since memory consumption was critical), SQLite for the database management, and Google tests and Mocha (for the unit tests).</li>
      <li>Giotto: an SDK for the Cynny mobile and desktop apps (in C++11). It was the common library all Cynny apps were using to communicate with the Cynny servers. This multithreading synchronization middleware was developed using also third-party libraries like CMake, SQLite (for the synchronized internal database), Djinni (for the interface bindings with Objective-C and Android), and Catch as the testing suite.</li>
    </Ul></div>)
}];