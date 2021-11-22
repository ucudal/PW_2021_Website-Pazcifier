type Job = {
    empresa: string,
    puesto: string,
    fechaInicio: string,
    fechaFin?: string,
    descripcion: string,
    destacados?: [string]
}

const buildJobs = (job: Job) => {
    const jobContainer = document.createElement("div");
    jobContainer.classList.add("job-box__container");

    const enterprise = document.createElement("h1");
    enterprise.classList.add("job-box__container__title");
    enterprise.textContent = job.empresa

    const position = document.createElement("p");
    position.classList.add("job-box__container__subtitle");
    position.textContent = job.puesto

    const fromTo = document.createElement("p");
    fromTo.classList.add("job-box__container__body");
    fromTo.textContent = `${job.fechaInicio} ${job.fechaFin ? `- ${job.fechaFin}` : 'al presente'}`;
    
    const list = document.createElement("div");
    list.classList.add("job-box__container__listings");

    const summary = document.createElement("p");
    summary.classList.add("job-box__container__list__summary")
    summary.textContent = job.descripcion

    let listings : HTMLUListElement;
    if (job.destacados && job.destacados.length > 0) {
        listings = document.createElement("ul")
        listings.classList.add("job-box__container__listings__list")
        for (const destacado of job.destacados) {
            const item = document.createElement("li");
            item.textContent = destacado;
            listings.append(item);
        }
    }

    list.append(summary);
    if (job.destacados) {
        list.append(listings!);
    }

    jobContainer.append(enterprise);
    jobContainer.append(position);
    jobContainer.append(fromTo);
    jobContainer.append(list);

    return jobContainer
}

sendRequest(`${API_URL}/experiencia-laboral`, "GET").then((data) => {
    const jobBox = document.querySelector(".job-box")
    data = data["experiencia-laboral"].map((e: Job) => buildJobs(e));
    for (const job of data) {
        jobBox!.append(job)
    }
})