Vue.component("news-ticker", {
    data: function()
    {
        return {
            messages: [
                "[ Important ] Subscribe To NEVEREND",
                "Useless Ticker",
                "Blue/Cyan Neon Finally Exists!",
                "Sussy-Layers Is Kinda Sus (Got Into Among Us Stuff)",
                "NEVERENDINGLESSNEVERENDINGNEVEREND",
                "ERROR404",
                "Neverend-Layers Is Kinda Coo- (Promoted Into Co-Owner Of This Game)",
                "omega layers but Neverend's Version",
                "mod.js: The Most Powerful Modding Tool",
                ":( Your Computer Has Ran Into A Problem Please Finish This Game To Fix It"
            ],
            currentMessage: "",
            messageIndex: -1
        }
    },
    computed: {
        animationDuration: function()
        {
            return 10 + 0.1 * this.currentMessage.replace(/<.*?>/g, "").length;
        }
    },
    methods: {
        getMessage: function()
        {
            const arr = Array.from(this.messages);
            if(this.messageIndex !== -1)
            {
                arr.splice(this.messageIndex, 1);
            }
            const index = Math.floor(Math.random() * arr.length);
            this.messageIndex = index;
            const element = arr[index];
            this.currentMessage = typeof element === "string" ? element : element();
        }
    },
    mounted: function()
    {
        this.getMessage();
        this.$refs.message.onanimationiteration = e =>
        {
            const anim = this.$refs.message.style.animation.slice();
            this.getMessage();
            this.$refs.message.style.animation = "none";
            void this.$refs.message.offsetWidth; //very black magic
            this.$refs.message.style.animation = anim;
            Vue.nextTick(() =>
            {
                if(this.$refs.message.style.animationDuration === "")
                {
                    this.$refs.message.style.animationDuration = this.animationDuration + "s";
                }
            });
        };
    },
    template: `<div class="news-ticker">
    <span ref="message" :style="{'animation-duration': animationDuration + 's'}" v-html="currentMessage"></span>
</div>`
})
