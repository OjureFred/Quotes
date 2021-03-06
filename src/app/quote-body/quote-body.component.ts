import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-body',
  templateUrl: './quote-body.component.html',
  styleUrls: ['./quote-body.component.css']
})
export class QuoteBodyComponent implements OnInit {

  title = 'Quotes';
  quotes: Quote[] = [
    new Quote(1, 'When you say YES to others make sure you are not saying NO to yourself', 'Paul Coelho',
    'Self Awareness', 'One should not always bend over bakwards to please others. First please yourself', false, 0, 0),
    new Quote(2, 'If you really want to catch your dream, you have to chase it', 'Unknown',
    'Inspirational', 'You can achieve anything if you dream of it. But you have to work hard for it to become true', false, 0, 0),
    new Quote(3, 'Life is short, break the rule, forgive quickly, kiss slowly, love truely,laugh uncontrollable and never forget anything that made you smile', 'Mark Twain',
    'Inspirational', 'Achieve happiness by exploring and enjoying what life has to offer and not fretting over minor details', false, 0, 0),
    new Quote(4, 'Act as if what you do makes a difference. It does', 'William James',
    'Inspirational', 'By doing your small thing, you are adding to the big things in this world', false, 0, 0),
  ]

  toggleDetails(index) {
    this.quotes[index].showDetail = !this.quotes[index].showDetail;
  }

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote);
  }

  completeQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
