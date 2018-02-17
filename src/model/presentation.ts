import { _Slide } from "./slide";


export class Presentation
{
    private projectTitle: string;
    private projectDescription: string;
    private projectSlides: Array<_Slide>;

    constructor(title: string, description: string, slides: Array<_Slide>)
    {
        new Presentation(title, description, slides);
    }

    getProjectTitle()
    {
        return this.projectTitle;
    }

    getProjectDescription()
    {
        return this.projectDescription;
    }

    setProjectTitle(title:string)
    {
        this.projectTitle = title;
    }

    setProjectDescription(description:string)
    {
        this.projectDescription = description;
    }

    getSlides()
    {
        return this.projectSlides;
    }

    addSlide(slideObject: _Slide)
    {
        this.projectSlides.push(slideObject);
    }
}