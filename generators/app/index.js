import Generator from "yeoman-generator";

export default class extends Generator {
    create() {
        this.fs.copyTpl(
            this.templatePath('*'),
            this.destinationPath()
        );
    }
};