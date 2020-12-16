import React from 'react';
import { connect } from 'react-redux';
import { getRestaurant } from '../../actions/restaurant_actions';
import { Link } from 'react-router-dom';
import Modal from '../modal/modal';
import ReviewIndex from '../reviews/review_index';
import ReviewForm from '../reviews/review_form';

 
// class RestaurantShowPage extends React.Component {
    // componentDidMount(){



    //     this.props.getRestaurant(this.props.match.params.restaurantId)
    //     // debugger
    // }
    // render(){ return() }
    // let reviews = [];
const RestaurantShowPage = props => {

    React.useEffect(() =>  {
        props.getRestaurant(props.match.params.restaurantId)
        // .then(reviews => {
            
            // debugger
        //     props.restaurant.reviews = reviews

        // })
        
    },[])
// debugger
    return (
        // <>
        <div className='backdrop'>
            <div 
            style={{backgroundImage : `url(${props.restaurant ? props.restaurant.photoUrl : ivyWallURL})`}}
            className="background-img">
                {/* <img src={this.props.imageUrl ? this.props.imageUrl : ivyWallURL} alt="" /> */}
            </div>
           

            
            <div className='restaurant'>
             
                <main className="restaurant-box">
                    <nav className="selection-nav sticky">
                        <Link to={`/restauarants/${props.match.params.restaurantId}#overview`}>Overview</Link>
                        <Link to={`/restauarants/${props.match.params.restaurantId}#menu`}>Menu</Link>
                        <Link to={`/restauarants/${props.match.params.restaurantId}#photos`}>Photos</Link>
                        <Link to={`/restauarants/${props.match.params.restaurantId}#reviews`}>Reviews</Link>
                    </nav>

                    {props.restaurant ?
                    <h1 >{props.restaurant.name}</h1>

                    : null}
                    <h2 id="menu"> Menu</h2>
                    <p>Invent the universe consciousness light years a still more glorious dawn awaits 
                        citizens of distant epochs paroxysm of global death? Vanquish the impossible
                         a mote of dust suspended in a sunbeam emerged into consciousness rings of Uranus laws of physics a very
                          small stage in a vast cosmic arena. Made in the interiors of collapsing stars citizens of distant epochs
                           dream of the mind's eye take root and flourish dispassionate extraterrestrial observer not a sunrise but a galaxyrise.

                            Shores of the cosmic ocean ship of the imagination tendrils of gossamer clouds emerged into consciousness network of wormholes science.
                             Bits of moving fluff gathered by gravity made in the interiors of collapsing stars tesseract
                             laws of physics rings of Uranus. Muse about hydrogen atoms a mote of dust suspended in a sunbeam
                             inconspicuous motes of rock and gas dream of the mind's eye vastness is bearable only through love 
                            and billions upon billions upon billions upon billions upon billions upon billions upon billions.
                            </p>
                    <h2 id="photos"> Photos</h2>
                        <p>As a patch of light vel illum qui dolorem eum fugiat quo voluptas nulla pariatur 
                            shores of the cosmic ocean dream of the mind's eye hydrogen atoms at the edge 
                            of forever.
                             Not a sunrise but a galaxyrise realm of the galaxies great turbulent clouds stirred by starlight the
                              only home we've ever known muse about. Consectetur venture vel illum qui dolorem eum fugiat quo voluptas 
                              nulla pariatur adipisci velit are creatures of the cosmos extraordinary claims require extraordinary evidence.

                            Take root and flourish of brilliant syntheses dispassionate extraterrestrial observer another world hearts of the stars adipisci velit.
                             Tingling of the spine paroxysm of global death Cambrian explosion the only home we've ever known white dwarf the carbon in our apple pies.
                              Hundreds of thousands consectetur are creatures of the cosmos quis nostrum exercitationem
                              ullam corporis suscipit laboriosam dream of the mind's eye qui dolorem ipsum quia dolor sit amet
                              and billions upon billions upon billions upon billions upon billions upon billions upon billions.
                             </p>
                    <h2 id="reviews">Reviews</h2>
                        <ReviewForm restaurantId={props.match.params.restaurantId}/>

                        <ReviewIndex reviews={props.restaurant ? props.restaurant.reviews : []}/>
                    
                </main>  

                <aside className="reservation-box sticky">
                        <div className='reservation'>
                            <h2>make a reservation</h2>
                            
                        </div>
             
                </aside>
            </div>
        </div>
        // </>
        )

}

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
         restaurant: state.entities.restaurants.all[ownProps.match.params.restaurantId]
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getRestaurant: (id) => dispatch(getRestaurant(id))
    }
}
export default connect(mapStateToProps ,mapDispatchToProps)(RestaurantShowPage);