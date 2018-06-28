/* tslint:disable max-line-length */
import {TestBed, getTestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {GameService} from "./game.service";
import {RoundModel} from "../entities/round.model";

describe('Service Tests', () => {

  describe('Client Service', () => {
    let injector: TestBed;
    let service: GameService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule
        ],
        providers: [
          GameService
        ]
      });
      injector = getTestBed();
      service = injector.get(GameService);
    });

    describe('Service methods', () => {
      it('should create a round', () => {
        let game = service.create(21);
        expect(game.winner).toEqual(null);
        expect(game.totalitems).toEqual(21);
      });
      it('should fail when remove items from empty round', () => {
        expect(service.removeAllumette(3, null, "")).toBeTruthy();
      });
    });

    afterEach(() => {
    });

  });

});
