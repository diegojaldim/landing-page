import constants from './helpers/constants';
import { get } from './helpers/http';

const url = `${constants.URL}${constants.endpoints.JOBS}`;

const getJobs = url =>
    get(url)
        .then(res => res.data.vagas)
        .then(jobs => jobs.filter(job => job.ativa));

const list = document.querySelector('#list');

let li = '';

const renderJobs = job => {
    let address = job.localizacao ? `${job.localizacao.bairro} - ${job.localizacao.cidade}, ${job.localizacao.pais}` : 'Remoto';
    li += '<li><p class="job-title"><a href="http://elo7.dev/vaga/desenvolvedor-mobile-senior">'+ job.cargo +'</a></p><p class="job-locale">' + address +'</p></li>';
};

(async () => {
    const jobs = await getJobs(url);
    jobs.map(renderJobs);
    list.innerHTML = li;
})();
