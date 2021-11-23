const checkIfHidden = (element: HTMLElement) => {
    if (element.classList.contains('modal--hidden')) {
        backdrop!.classList.replace('fade-out', 'fade-in--500')
        modalContainer!.classList.replace('bottom-top', 'top-bottom')
        element.classList.remove('modal--hidden');
    } else {
        backdrop!.classList.replace('fade-in--500', 'fade-out');
        modalContainer!.classList.replace('top-bottom', 'bottom-top');
        setTimeout(() => {
            element.classList.add('modal--hidden');
        }, 450);
        resetForm();
    }
}

const checkForCookie = () => {
    const cookieName = "PW_2021-CV_Contacto="
    
    if (document.cookie) {
        const name = document.cookie.split("=")[1];
        (document.getElementById('name') as any).value = name
    }
}

const resetForm = () => {
    const inputs = document.querySelectorAll("input");
    const textarea = document.querySelector("textarea");
    const select = document.querySelector("select");

    inputs.forEach((input) => {
        input.value = "";
    })

    select!.value = "default";

    textarea!.value = "";

    checkForCookie();
}

const API_URL = "https://pw2021-apinode-pazcifier-1.pazcifier.repl.co"
type Methods = "POST" | "GET" | "PUT" | "PATCH" | "DELETE";

const sendRequest = async (url: string, method: Methods, body?: any, headers?: HeadersInit) => {
    const response = await fetch(url, {
        method: method,
        headers: headers,
        credentials: "include",
        body: JSON.stringify(body)
    })
    return response.json()
}

const button = document.getElementById("contact-button");
const phoneButton = document.getElementById("phone-contact-button");
const backdrop = document.querySelector(".modal__backdrop");
const modalSubmitButton = document.getElementById("modal-submit-button");
const modalCloseButton = document.getElementById("modal-close-button");
const modalContainer = document.querySelector(".modal__container")

button!.addEventListener('click', () => {
    checkIfHidden(document.querySelector(".modal")!)
});

phoneButton!.addEventListener('click', () => {
    checkIfHidden(document.querySelector(".modal")!)
});

backdrop!.addEventListener('click', () => {
    checkIfHidden(document.querySelector(".modal")!)
});

modalCloseButton!.addEventListener('click', () => {
    checkIfHidden(document.querySelector(".modal")!)
});

modalSubmitButton!.addEventListener('click', () => {
    const name = document.getElementById("name") as any;

    sendRequest(`${API_URL}/enviar-formulario`, "POST", { nombreContacto: name.value }, { 'Content-Type': 'application/json' }).then((data) => {
        console.log(data)
        checkIfHidden(document.querySelector(".modal")!)
    });
})

checkForCookie();