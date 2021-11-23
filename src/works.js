var buildJobs = function (job) {
    var jobContainer = document.createElement("div");
    jobContainer.classList.add("job-box__container");
    var enterprise = document.createElement("h1");
    enterprise.classList.add("job-box__container__title");
    enterprise.textContent = job.empresa;
    var position = document.createElement("p");
    position.classList.add("job-box__container__subtitle");
    position.textContent = job.puesto;
    var fromTo = document.createElement("p");
    fromTo.classList.add("job-box__container__body");
    fromTo.textContent = job.fechaInicio + " " + (job.fechaFin ? "- " + job.fechaFin : 'al presente');
    var list = document.createElement("div");
    list.classList.add("job-box__container__listings");
    var summary = document.createElement("p");
    summary.classList.add("job-box__container__list__summary");
    summary.textContent = job.descripcion;
    var listings;
    if (job.destacados && job.destacados.length > 0) {
        listings = document.createElement("ul");
        listings.classList.add("job-box__container__listings__list");
        for (var _i = 0, _a = job.destacados; _i < _a.length; _i++) {
            var destacado = _a[_i];
            var item = document.createElement("li");
            item.textContent = destacado;
            listings.append(item);
        }
    }
    list.append(summary);
    if (job.destacados) {
        list.append(listings);
    }
    jobContainer.append(enterprise);
    jobContainer.append(position);
    jobContainer.append(fromTo);
    jobContainer.append(list);
    return jobContainer;
};
sendRequest(API_URL + "/experiencia-laboral", "GET").then(function (data) {
    var jobBox = document.querySelector(".job-box");
    data = data["experiencia-laboral"].map(function (e) { return buildJobs(e); });
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var job = data_1[_i];
        jobBox.append(job);
    }
});
