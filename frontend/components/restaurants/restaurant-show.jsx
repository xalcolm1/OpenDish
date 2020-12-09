import React from 'react';
import { connect } from 'react-redux';
import { getRestaurant } from '../../actions/restaurant_actions';
// import { } from 'react-dom';

class RestaurantShowPage extends React.Component {
    componentDidMount(){
        // debugger


        this.props.getRestaurant(this.props.match.params.restaurantId)
    }

    render(){
        // debugger
    return (
        // <>
        <div className='backdrop'>
            <div 
            style={{backgroundImage : `url(${this.props.imageUrl ? this.props.imageUrl : ivyWallURL})`}}
            className="background-img">
                {/* <img src={this.props.imageUrl ? this.props.imageUrl : ivyWallURL} alt="" /> */}
            </div>
           

            
            <div className='restaurant'>
             
                <main className="restaurant-box">
                    <nav className="selection-nav sticky">
                        <a href="#overview">Overview</a>
                        <a href="#menu">Menu</a>
                        <a href="#photos">Photos</a>
                        <a href="#reviews">Reviews</a>
                    </nav>

                    {this.props.restaurant ?
                    <h1 >{this.props.restaurant.name}</h1>

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
                    <p>Rig Veda extraordinary claims require extraordinary evidence galaxies paroxysm of global
                         death star stuff harvesting star light vanquish the impossible. Sed ut perspiciatis 
                         unde omnis iste natus error sit voluptatem accusantium doloremque laudantium Quis autem vel eum iure reprehenderit
                          qui in ea voluptate velit esse quam nihil molestiae consequatur adipisci velit globular star cluster ship of the imagination
                           adipisci velit. How far away citizens of distant epochs citizens of distant epochs the sky calls to us inconspicuous motes of 
                           rock and gas made in the interiors of collapsing stars.

                            Dispassionate extraterrestrial observer Flatland Euclid Neque porro quisquam est galaxies sed quia consequuntur magni dolores
                             eos qui ratione voluptatem sequi nesciunt. Preserve and cherish that pale blue dot cosmic ocean qui dolorem ipsum quia dolor sit amet emerged
                             into consciousness inconspicuous motes of rock and gas vanquish the impossible? 
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit Nemo enim ipsam voluptatem
                             quia voluptas sit aspernatur aut odit aut fugit inconspicuous motes of rock and gas extraordinary claims
                             require extraordinary evidence intelligent beings sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
                             quaerat voluptatem and billions upon billions upon billions upon billions upon billions upon billions upon billions.
                            </p>
                    
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

}

const mapStateToProps = (state, ownProps) => {
    return {
         restaurant: state.entities.restaurants.all[ownProps.match.params.restaurantId]
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getRestaurant: (id) => dispatch(getRestaurant(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(RestaurantShowPage);