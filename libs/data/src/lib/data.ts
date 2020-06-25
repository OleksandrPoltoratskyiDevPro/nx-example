export interface Todo {
  title: string;
  another_prop?: boolean;
  yet_another?: string;
}


// you can test shared files changes and sync to all apps
export class SomeSharedClass {
  private name: string;

  constructor(name: string) {
    this.name = name + ' concated part';
  }
}
