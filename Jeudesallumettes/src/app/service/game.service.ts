import {Injectable} from "@angular/core";
import {RoundModel} from "../entities/round.model";

@Injectable()
export class GameService {

  /**
   *  init the round with passing the game level index
   *  * @returns {RoundModel}
   */
  create(index: number): RoundModel {
    let round = new RoundModel();
    round.totalitems = index;
    round.startTime = new Date().getTime();
    return round;
  }

  /**
   *  provide a method to handle the game action
   */
  removeAllumette(removeditems: number, round: RoundModel, lastgamer: string): RoundModel {
    round.totalitems -= removeditems;
    round.coup++;
    round.lastgamer = lastgamer;
    if (round.totalitems === 0) {
      round.endDate = new Date().getTime();
      round.winner = round.lastgamer;
    }
    return round;
  }

}
