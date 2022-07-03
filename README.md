# Camper App

Aplikacja ma na celu możliwość wypożyczenia kampera lub wystawienia własnego pojazdu do wynajęcia przez innych użytkowników.


### Aplikacja stworzona w składzie:

1. Daria Koleśnik : Design aplikacji + CSS,
2. Karol Nowakowski : Logika aplikacji (React, Firebase),
3. Marcin Bejger : HTML + CSS, Javascript
4. Wojciech Bardyga : HTML + CSS

### Wprowadzenie
Jest to nasza ćwiczeniowa aplikacja. Powstała na podstawie wiedzy zdobytej podczas bootcamp’u: Frontend Developer oraz wiedzy zdobytej podczas własnej edukacji, która ma na celu utrwalić zakres materiału z kursu. 

### Technologie

* React 18.1,
* Firebase 9.8.1,
* Fullcalendar 5.11,
* GoogleMaps 1.1.35,
* Emailjs 3.2,
* Formik 2.2.9
* React-datapicker 4.8,
* React-uuid 1.0.2,
* Styled-components 5.3.5
* Yup 0.32.11,
* React-icons 4.4,
* React-image-gallery 1.2.8

### Uruchomienie

Przed pobraniem repozytorium potrzebna jest instalacja: [Git](https://git-scm.com) i [Node.js](https://nodejs.org/en/download/). 

1. Klonowanie repozytorium
```
$ git clone https://github.com/infoshareacademy/jfdzr6-team-returny.git
$ cd camper_app
```
2. W katalogu /src dodaj plik config.js poniższymi danymi:

```
export const firebaseConfig = {
    apiKey: "abc,
    authDomain: "abc",
    projectId: "abc",
    storageBucket: "abc",
    messagingSenderId: "abc",
    appId: "abc",
    measurementId: "abc"
  };
````

Po konkretne wartości kluczy skontaktuj się z przedstawicielem zespołu.

3. Instalacja zależności
```
$ npm install
$ npm start
```


**Przykładowy użytkownik:**
Login : user@user.com
Hasło : user123
