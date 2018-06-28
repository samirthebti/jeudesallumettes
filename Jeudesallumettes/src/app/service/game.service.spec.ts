/* tslint:disable max-line-length */
import {TestBed, getTestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {GameService} from "./game.service";

describe('Service Tests', () => {

  describe('Client Service', () => {
    let injector: TestBed;
    let service: GameService;
    let httpMock: HttpTestingController;

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
      httpMock = injector.get(HttpTestingController);
    });

    afterEach(() => {
      httpMock.verify();
    });

  });

});
