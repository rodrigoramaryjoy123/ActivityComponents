import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayhelloworldComponent } from './components/displayhelloworld/displayhelloworld.component';
import { ShowhellobuttonComponent } from './components/showhellobutton/showhellobutton.component';
import { DisplaynameComponent } from './components/displayname/displayname.component';
import { CounterComponent } from './components/counter/counter.component';
import { SimpleformComponent } from './components/simpleform/simpleform.component';
import { UserageComponent } from './components/userage/userage.component';
import { UsergreetingComponent } from './components/usergreeting/usergreeting.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { TextlengthComponent } from './components/textlength/textlength.component';
import { CurrencyconverterComponent } from './components/currencyconverter/currencyconverter.component';
import { EvenoddcheckerComponent } from './components/evenoddchecker/evenoddchecker.component';
import { WordreverserComponent } from './components/wordreverser/wordreverser.component';
import { ShowdateComponent } from './components/showdate/showdate.component';
import { ShowusernameComponent } from './components/showusername/showusername.component';
import { MultiplicationtableComponent } from './components/multiplicationtable/multiplicationtable.component';
import { SimpleloginComponent } from './components/simplelogin/simplelogin.component';
import { FahrenheittocelsiusComponent } from './components/fahrenheittocelsius/fahrenheittocelsius.component';
import { BookmarklistComponent } from './components/bookmarklist/bookmarklist.component';
import { CharactercounterComponent } from './components/charactercounter/charactercounter.component';
import { PalindromecheckerComponent } from './components/palindromechecker/palindromechecker.component';
import { TemperatureconverterComponent } from './components/temperatureconverter/temperatureconverter.component';
import { ShoppinglistComponent } from './components/shoppinglist/shoppinglist.component';
import { FactorialcalculatorComponent } from './components/factorialcalculator/factorialcalculator.component';
import { TodomanagerComponent } from './components/todomanager/todomanager.component';
import { GuessnumbergameComponent } from './components/guessnumbergame/guessnumbergame.component';
import { WordcounterComponent } from './components/wordcounter/wordcounter.component';
import { RandomnumbergeneratorComponent } from './components/randomnumbergenerator/randomnumbergenerator.component';
import { MultiplicationcheckerComponent } from './components/multiplicationchecker/multiplicationchecker.component';
import { UppercaseconverterComponent } from './components/uppercaseconverter/uppercaseconverter.component';
import { WordshufflerComponent } from './components/wordshuffler/wordshuffler.component';
import { BmisolverComponent } from './components/bmisolver/bmisolver.component';
import { UsernamevalidatorComponent } from './components/usernamevalidator/usernamevalidator.component';
import { InterestcalculatorComponent } from './components/interestcalculator/interestcalculator.component';
import { CompoundinterestcalculatorComponent } from './components/compoundinterestcalculator/compoundinterestcalculator.component';
import { FibonaccigeneratorComponent } from './components/fibonaccigenerator/fibonaccigenerator.component';
import { OddsumcalculatorComponent } from './components/oddsumcalculator/oddsumcalculator.component';
import { CurrencyformatterComponent } from './components/currencyformatter/currencyformatter.component';
import { RandomquotedisplayComponent } from './components/randomquotedisplay/randomquotedisplay.component';
import { UppercasegreetingComponent } from './components/uppercasegreeting/uppercasegreeting.component';
import { DivisiblecheckerComponent } from './components/divisiblechecker/divisiblechecker.component';
import { AutoclickerComponent } from './components/autoclicker/autoclicker.component';
import { AutofinderComponent } from './components/autofinder/autofinder.component';
import { IdcheckerComponent } from './components/idchecker/idchecker.component';
import { AiassistantComponent } from './components/aiassistant/aiassistant.component';
import { LocationfinderComponent } from './components/locationfinder/locationfinder.component';
import { BioscannerComponent } from './components/bioscanner/bioscanner.component';
import { CamscannerComponent } from './components/camscanner/camscanner.component';
import { NotificationComponent } from './components/notification/notification.component';
import { GalleryviewerComponent } from './components/galleryviewer/galleryviewer.component';
import { ScorecheckerComponent } from './components/scorechecker/scorechecker.component';
import { RGBtoHexConverterComponent } from './rgbto-hex-converter/rgbto-hex-converter.component';
import { SpeedConverterComponent } from './speed-converter/speed-converter.component';
import { LeapYearCheckerComponent } from './leap-year-checker/leap-year-checker.component';
import { DayDifferenceCalculatorComponent } from './day-difference-calculator/day-difference-calculator.component';
import { PythagoreanTheoremSolverComponent } from './pythagorean-theorem-solver/pythagorean-theorem-solver.component';
import { LanguageTranslatorComponent } from './language-translator/language-translator.component';
import { VirtualPetComponent } from './virtual-pet/virtual-pet.component';
import { DailyJournalComponent } from './daily-journal/daily-journal.component';
import { ExpenseSplitterComponent } from './expense-splitter/expense-splitter.component';
import { MindMapComponent } from './mind-map/mind-map.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayhelloworldComponent,
    ShowhellobuttonComponent,
    DisplaynameComponent,
    CounterComponent,
    SimpleformComponent,
    UserageComponent,
    UsergreetingComponent,
    CalculatorComponent,
    TextlengthComponent,
    CurrencyconverterComponent,
    EvenoddcheckerComponent,
    WordreverserComponent,
    ShowdateComponent,
    ShowusernameComponent,
    MultiplicationtableComponent,
    SimpleloginComponent,
    FahrenheittocelsiusComponent,
    BookmarklistComponent,
    CharactercounterComponent,
    PalindromecheckerComponent,
    TemperatureconverterComponent,
    ShoppinglistComponent,
    FactorialcalculatorComponent,
    TodomanagerComponent,
    GuessnumbergameComponent,
    WordcounterComponent,
    RandomnumbergeneratorComponent,
    MultiplicationcheckerComponent,
    UppercaseconverterComponent,
    WordshufflerComponent,
    BmisolverComponent,
    UsernamevalidatorComponent,
    InterestcalculatorComponent,
    CompoundinterestcalculatorComponent,
    FibonaccigeneratorComponent,
    OddsumcalculatorComponent,
    CurrencyformatterComponent,
    RandomquotedisplayComponent,
    UppercasegreetingComponent,
    DivisiblecheckerComponent,
    AutoclickerComponent,
    AutofinderComponent,
    IdcheckerComponent,
    AiassistantComponent,
    LocationfinderComponent,
    BioscannerComponent,
    CamscannerComponent,
    NotificationComponent,
    GalleryviewerComponent,
    ScorecheckerComponent,
    RGBtoHexConverterComponent,
    SpeedConverterComponent,
    LeapYearCheckerComponent,
    DayDifferenceCalculatorComponent,
    PythagoreanTheoremSolverComponent,
    LanguageTranslatorComponent,
    VirtualPetComponent,
    DailyJournalComponent,
    ExpenseSplitterComponent,
    MindMapComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
