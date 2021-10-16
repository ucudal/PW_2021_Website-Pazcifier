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

const resetForm = () => {
    const inputs = document.querySelectorAll("input");
    const textarea = document.querySelector("textarea");
    const select = document.querySelector("select");

    inputs.forEach((input) => {
        input.value = "";
    })

    select!.value = "default";

    textarea!.value = "";
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
    checkIfHidden(document.querySelector(".modal")!)
})

// function Form() {
//     this.users = 1;
//     this.createdUsers;

//     this.validator = new Validator();

//     // const name = document.getElementById("name");
//     // const surname = document.getElementById("surname");

//     this.addUser = () => {
//         let invalid = false;

//         if (!this.validator.minLength(name.value, 2)) {
//             console.log("Nombre invalido")
//             name.classList.replace("form__input", "form__input--error")
//             invalid = true;
//         }

//         if (!this.validator.minLength(surname.value, 2)) {
//             console.log("apellido invalido")
//             surname.classList.replace("form__input", "form__input--error")
//             invalid = true;
//         }

//         if (invalid) {
//             return;
//         }

//         const user = { id: this.users, name: name.value, surname: surname.value };
//         this.createUserElement(user);
//         this.users++;
//         this.reset();
//     }

//     this.createUserElement = (user) => {
//         if (!this.createdUsers) {
//             this.createdUsers = document.createElement("div");
//             this.createdUsers.classList = "list";
//         }

//         const userElement = document.createElement("div");
//         userElement.classList = "list__element";
//         userElement.id = user.id;

//         const userName = document.createElement("p");
//         userName.textContent = `Nombre: ${user.name}`
//         const userSurname = document.createElement("p");
//         userSurname.textContent = `Apellido: ${user.surname}`

//         const buttonDeleteUser = document.createElement("button");
//         buttonDeleteUser.classList = "button bg-red-500 absolute right-12 top-2";
//         buttonDeleteUser.textContent = "Eliminar";
//         buttonDeleteUser.onclick = () => {
//             this.deleteUser(user.id);
//         }

//         userElement.append(userName);
//         userElement.append(userSurname);
//         userElement.append(buttonDeleteUser);
//         this.createdUsers.append(userElement);

//         document.body.append(this.createdUsers);
//     }

//     this.deleteUsers = () => {
//         this.createdUsers.remove();
//         this.createdUsers = null;
//         this.users = [];
//     }

//     this.deleteUser = (id) => {
//         for (const user of this.createdUsers.children) {
//             if (id == user.id) {
//                 user.remove();
//                 break;
//             }
//         }
//     }

//     this.reset = () => {
//         name.value = null;
//         surname.value = null;

//         name.classList.replace("form__input--error", "form__input")
//         surname.classList.replace("form__input--error", "form__input")
//     }
// }

// function Validator() {
//     this.minLength = (value, length) => value.length > length;
// }

// function Modal() {
//     this.modal;
//     this.backdrop;

//     this.showModal = () => {
//         this.modal = document.createElement('div');

//         this.backdrop = document.createElement('div')
//         this.backdrop.className = 'backdrop';
//         this.backdrop.addEventListener('click', this.closeModal)

//         const modalContainer = document.createElement('div');
//         modalContainer.className = 'modal__container'

//         const modalBody = document.createElement('div');
//         modalBody.className = "modal__container__body"

//         const form = document.createElement('form');
//         const name = document.createElement('input');
//         const surname = document.createElement('input')

//         this.modal.append(this.backdrop);
//         this.modal.append(modalContainer);
//         document.body.append(this.modal);
//     }

//     this.closeModal = () => {
//         this.modal.remove();
//         this.modal = null;

//         this.backdrop.remove();
//         this.backdrop = null;
//     }
// }

// const button = document.getElementById("contact-button")
// const phoneButton = document.getElementById("phone-contact-button")
// const modal = new Modal();

// button.addEventListener('click', modal.showModal);
// phoneButton.addEventListener('click', modal.showModal);

// function showModalHandler() {
//     if (modal) {
//         return;
//     }

//     modal = document.createElement('div');
//     modal.className = 'modal';

//     const modalText = document.createElement('p');
//     modalText.textContent = 'Are you sure?';

//     const modalCancelAction = document.createElement('button');
//     modalCancelAction.textContent = 'Cancel';
//     modalCancelAction.className = 'btn btn--alt';
//     modalCancelAction.addEventListener('click', closeModalHandler);

//     const modalConfirmAction = document.createElement('button');
//     modalConfirmAction.textContent = 'Confirm';
//     modalConfirmAction.className = 'btn';
//     modalConfirmAction.addEventListener('click', closeModalHandler);

//     modal.append(modalText);
//     modal.append(modalCancelAction);
//     modal.append(modalConfirmAction);

//     document.body.append(modal);

//     backdrop = document.createElement('div');
//     backdrop.className = 'backdrop';

//     backdrop.addEventListener('click', closeModalHandler);

//     document.body.append(backdrop);
// }

// function closeModalHandler() {
//     modal.remove();
//     modal = null;

//     backdrop.remove();
//     backdrop = null;
// }