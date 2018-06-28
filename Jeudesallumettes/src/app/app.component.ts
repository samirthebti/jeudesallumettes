import {Component, OnDestroy, OnInit} from '@angular/core';
import {GameService} from "./service/game.service";
import {RoundModel} from "./entities/round.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  round: RoundModel;
  gameLevel = 21;
  items = [];

  constructor(
    private gameService: GameService,
  ) {
  }

  ngOnInit() {
    this.resetGame();
  }

  /**
   * Process the round when gamer select a number
   * @param value
   * @param {string} player
   */
  private performAction(value: any, player: string) {
    this.items.splice(0, value);
    this.round = this.gameService.removeAllumette(value, this.round, player);
  }

  /**
   * Reset the current round at the end of it
   */
  resetGame() {
    this.round = this.gameService.create(this.gameLevel);
    this.items = Array(this.round.totalitems).fill("");
  }

}
