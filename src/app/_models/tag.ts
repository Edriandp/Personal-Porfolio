export class Tag {
    static readonly ANGULAR = new Tag ('Angular', '#c1121f');
    static readonly JAVA = new Tag ('Java', '#ee9b00');
    static readonly KOTLIN = new Tag ('Kotlin', 'green');
    static readonly TYPESCRIPT = new Tag ('TypeScript', '#ca6702');
    static readonly JAVASCRIPT = new Tag ('JavaScript', '#ee9b00');
    static readonly NODEJS = new Tag ('NodeJS', '#e9c46a');
    static readonly REACT = new Tag ('React', '#3a86ff');
    static readonly PYTHON = new Tag ('Python', '#3a5a40');
    static readonly SPRING = new Tag ('Spring', '#b5e48c');
    static readonly JAVAFX = new Tag ('JavaFX', '#d7903b');
    static readonly BOOTSTRAP = new Tag ('BootStrap', '#ff5733');
    static readonly HIBERNATE = new Tag ('Hibernate', '#d7ce3b');  
    private constructor(private readonly key: string, public readonly color: string) {

    }
    toString() {
        return this.key;
    }
}