const forms = document.querySelectorAll("form");

forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const body = {};

        formData.append("form", form.classList.value);

        formData.forEach((value, field) => {
            body[field] = value;
        });

        fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(response.status);
                }
            })
            .then((data) => {
                alert("Данные были отправлены успешно");
                if (form.classList.contains("modal__form")) {
                    setTimeout(() => {
                        modal.classList.add("hidden");
                    }, 2000);
                }
            })
            .catch((error) => {
                alert("Данные были отправлены с ошибкой " + error.message);
            })
            .finally(() => {
                form.reset();
            });
    });
});