Vue.component("aleph-upgrade", {
    props: ["upgrade"],
    template: `<resource-upgrade :upgrade="upgrade" :resourcename="'<img alt="NC" class="inline" src="images/N-Coin.png"/>'"></resource-upgrade>`
});
