import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  pressedButton: boolean = false;
  animals: boolean = true;
  numbers: boolean = false;
  colors: boolean = false;
  spanish: boolean = true;
  portuguese: boolean = false;
  english: boolean = false;
  language: string = '_esp';
  audioPath: string;
  sound: any;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  logoutUser() {
    this.authService.signOut();
    this.playSoundGreeting();
  } // end of logoutUser

  playSoundTheme(typeOfSound: string) {
    if (this.animals) {
      this.audioPath =
        '../../../assets/audio_animals/' + typeOfSound + this.language + '.mp3';
      this.sound = new Audio(this.audioPath);
      this.sound.play();
    } else if (this.numbers) {
      this.audioPath =
        '../../../assets/audio_numbers/' + typeOfSound + this.language + '.mp3';
      this.sound = new Audio(this.audioPath);
      this.sound.play();
    } else if (this.colors) {
      this.audioPath =
        '../../../assets/audio_colors/' + typeOfSound + this.language + '.mp3';
      this.sound = new Audio(this.audioPath);
      this.sound.play();
    }
  } // end of playSound

  chooseLanguage(languageOption: number) {
    switch (languageOption) {
      case 1:
        this.spanish = false;
        this.portuguese = true;
        this.english = false;
        this.language = '_por';
        break;
      case 2:
        this.spanish = false;
        this.portuguese = false;
        this.english = true;
        this.language = '_eng';
        break;
      case 3:
        this.spanish = true;
        this.portuguese = false;
        this.english = false;
        this.language = '_esp';
        break;
    }
    this.playSoundLanguageChange();
  } // end of chooseLanguage

  chooseTheme(themeOption: number) {
    this.pressedButton = true;
    setTimeout(() => {
      this.pressedButton = false;
      switch (themeOption) {
        case 1:
          this.animals = false;
          this.numbers = true;
          this.colors = false;
          break;
        case 2:
          this.animals = false;
          this.numbers = false;
          this.colors = true;
          break;
        case 3:
          this.animals = true;
          this.numbers = false;
          this.colors = false;
          break;
      }
      this.playSoundThemeChange();
    }, 2000);
  } // end of chooseTheme

  chooseAnimal(animal: string) {
    this.playSoundTheme(animal);
  } // end of chooseAnimal

  chooseColor(color: string) {
    this.playSoundTheme(color);
  } // end of chooseColor

  chooseNumber(number: string) {
    this.playSoundTheme(number);
  } // end of chooseNumber

  playSoundLanguageChange() {
    const path = '../../../assets/extra/language' + this.language + '.mp3';
    const audio = new Audio(path);
    audio.play();
  } // end of playSoundLanguage

  playSoundThemeChange() {
    if (this.animals) {
      const path = '../../../assets/extra/animals' + this.language + '.mp3';
      const audio = new Audio(path);
      audio.play();
    } else if (this.numbers) {
      const path = '../../../assets/extra/numbers' + this.language + '.mp3';
      const audio = new Audio(path);
      audio.play();
    } else if (this.colors) {
      const path = '../../../assets/extra/colors' + this.language + '.mp3';
      const audio = new Audio(path);
      audio.play();
    }
  } // end of playSoundLanguage

  playSoundGreeting() {
    const path = '../../../assets/extra/greeting' + this.language + '.mp3';
    const audio = new Audio(path);
    audio.play();
  } // end of playSoundGreeting
}
