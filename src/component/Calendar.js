import React, { Component } from 'react';
import './Calendar.css';

class Calendar extends Component {
    
    render(){
        return (
            <section className="container">
                <h3 className="color-pink">날짜</h3>
                <article className="calendar max-width-xl">
                    <div className="days-of-week monday">Mon</div>
                    <div className="days-of-week tuesday">Tues</div>
                    <div className="days-of-week wednesday">Wed</div>
                    <div className="days-of-week thursday">Thurs</div>
                    <div className="days-of-week friday">Fri</div>
                    <div className="days-of-week saturday">Sat</div>
                    <div className="days-of-week sunday">Sun</div>
                    <div className="days nov-30">30</div>
                    <div className="days dec-01">01</div>
                    <div className="days dec-02">02</div>
                    <div className="days dec-03">03</div>
                    <div className="days dec-04">04</div>
                    <div className="days dec-05 wedding-day">
                        <span className="wedding-day-date">05</span>
                        <div className="wedding-day-details">
                            <span className="wedding-day-emoji" role="wedding" aria-label="wedding">💍</span>
                            <span className="wedding-day-title">결혼식</span>
                        </div>
                    </div>
                    <div className="days dec-06">06</div>
                    <div className="days dec-07">07</div>
                    <div className="days dec-08">08</div>
                    <div className="days dec-09">09</div>
                    <div className="days dec-10">10</div>
                    <div className="days dec-11">11</div>
                    <div className="days dec-12">12</div>
                    <div className="days dec-13">13</div>
                    <div className="days dec-14">14</div>
                    <div className="days dec-15">15</div>
                    <div className="days dec-16">16</div>
                    <div className="days dec-17">17</div>
                    <div className="days dec-18">18</div>
                    <div className="days dec-19">19</div>
                    <div className="days dec-20">20</div>
                    <div className="days dec-21">21</div>
                    <div className="days dec-22">22</div>
                    <div className="days dec-23">23</div>
                    <div className="days dec-24">24</div>
                    <div className="days dec-25">25</div>
                    <div className="days dec-26">26</div>
                    <div className="days dec-27">27</div>
                    <div className="days dec-28">28</div>
                    <div className="days dec-29">29</div>
                    <div className="days dec-30">30</div>
                    <div className="days dec-31">31</div>
                    <div className="days jan-01">01</div>
                    <div className="days jan-02">02</div>
                    <div className="days jan-03">03</div>
                </article>
            </section>
        );
    }
}

export default Calendar;