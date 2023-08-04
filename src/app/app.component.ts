import { Component } from "@angular/core";
import { invoke } from "@tauri-apps/api/tauri";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  // greetingMessage = "";

  // greet(event: SubmitEvent, name: string): void {
  //   event.preventDefault();
      //this.greetingMessage = "Soy " + name
     //Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //   invoke<string>("greet", { name }).then((text) => {
  //     this.greetingMessage = text + ". This is Amazing!"
  //     this.clearInput()
  //   });

  // }

  // clearInput() {
  //   let inputElement: HTMLInputElement | null = document.querySelector('#greet-input');

  //   if (inputElement) {
  //     inputElement.value = '';
  //   }
  // }
}
