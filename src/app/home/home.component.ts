import { Component } from '@angular/core';
import { invoke } from "@tauri-apps/api/tauri";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
greetingMessage = "";

  greet(event: SubmitEvent, name: string): void {
    event.preventDefault();
      this.greetingMessage = "Soy " + name

    //Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    invoke<string>("greet", { name }).then((text) => {
      this.greetingMessage = text 
      this.clearInput()
    });

  }

  clearInput() {
    let inputElement: HTMLInputElement | null = document.querySelector('#greet-input');

    if (inputElement) {
      inputElement.value = '';
    }
  }
}
