const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");

const toggleModal = () => {
	modalContainer.classList.toggle("active");
};

modalTriggers.forEach((trigger) => trigger.addEventListener("click", toggleModal));

export { toggleModal, modalContainer, modalTriggers };
