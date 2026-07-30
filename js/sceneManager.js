export class SceneManager {

    constructor(container){

        this.container = container;

    }

    change(Scene){

        this.container.animate(

            [
                {
                    opacity:1,
                    transform:"scale(1)"
                },

                {
                    opacity:0,
                    transform:"scale(.98)"
                }

            ],

            {
                duration:600,
                fill:"forwards"
            }

        ).onfinish=()=>{

            new Scene(this.container);

            this.container.animate(

                [
                    {
                        opacity:0,
                        transform:"scale(1.02)"
                    },

                    {
                        opacity:1,
                        transform:"scale(1)"
                    }

                ],

                {
                    duration:600,
                    fill:"forwards"
                }

            );

        };

    }

}