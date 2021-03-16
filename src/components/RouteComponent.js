import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import { PICTURECAROUSEL } from '../shared/picturecarousel'

class Routes extends Component {
    constructor(props) {
      super(props);
      this.state = { 
          activeIndex: 0,
          items: PICTURECAROUSEL 
        };
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
      this.goToIndex = this.goToIndex.bind(this);
      this.onExiting = this.onExiting.bind(this);
      this.onExited = this.onExited.bind(this);
    }
  
    onExiting() {
      this.animating = true;
    }
  
    onExited() {
      this.animating = false;
    }
  
    next() {
      if (this.animating) return;
      const nextIndex =
        this.state.activeIndex === this.state.items.length - 1
          ? 0
          : this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    previous() {
      if (this.animating) return;
      const nextIndex =
        this.state.activeIndex === 0
          ? this.state.items.length - 1
          : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({ activeIndex: newIndex });
    }
  
    render() {
      const { activeIndex } = this.state;
  
      const slides = this.state.items.map(item => {
        return (
          <CarouselItem
            className="custom-tag"
            id='carouselitem'
            tag="div"
            key={item.src}
            onExiting={this.onExiting}
            onExited={this.onExited}
          >
            <img src={item.src} alt={item.altText} />
            <CarouselCaption 
              captionText={item.caption}
              captionHeader={item.header}
            />
          </CarouselItem>
        );
      });
  
      return (
        <div>
          <style>
            {`.custom-tag {
                  max-width: 100%
                  height: 300px
                  img-fluid
                  d-block
                  img-center
                }`}
          </style>
          <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
          >
            <CarouselIndicators
              items={this.state.items}
              activeIndex={activeIndex}
              onClickHandler={this.goToIndex}
            />
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={this.previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={this.next}
            />
          </Carousel>
        </div>
      );
    }
  }
  
  export default Routes;