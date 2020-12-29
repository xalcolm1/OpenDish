import React from 'react';

const Stars = props => {
    //props should be the rating that needs to be starifyied
 

    let rating = [];
    for(let i = 1; i <= 5; i ++){
        let nextStar
        if(i < props.targetRating && props.targetRating < (i + 1)){

            let percent = Math.floor((props.targetRating - i) * 100) 

            nextStar = (
            //id needs to identify what percent is being used, otherwise the gradient will not be unique in an index
            <svg width="20" height="19" key={ i }>
                <defs>
                
                    <linearGradient id={`half-star${percent}`} x1="24%" y1="0%" x2="85%" y2="0%">
                        <stop offset={`${percent}%`} style={{stopColor: "#FF523D"}} />
                        <stop offset={`${percent}%`} style={{stopColor: "#DDDDDD"}} />
                    </linearGradient>
                </defs>

                <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
                     <path fillRule="evenodd" clipRule="evenodd" d="M9.9999 16.4393L14.7139 18.8495C14.9735 18.9823 15.2693 19.0287 15.5576 18.9821C16.3002 18.8619 16.804 18.1672 16.6828 17.4306L15.8286 12.2388L19.5962 8.53657C19.8037 8.33266 19.9397 8.068 19.984 7.78161C20.0982 7.04387 19.5879 6.35396 18.8441 6.24066L13.6022 5.44213L11.2168 0.743866C11.0854 0.485093 10.8736 0.275053 10.6128 0.144728C9.94069 -0.191004 9.1215 0.0772397 8.78303 0.743866L6.39756 5.44213L1.15566 6.24066C0.866949 6.28464 0.600127 6.41949 0.394552 6.62533C-0.135029 7.15558 -0.13098 8.01127 0.403595 8.53657L4.17119 12.2388L3.31699 17.4306C3.26994 17.7165 3.31679 18.0099 3.45062 18.2674C3.79538 18.9309 4.61708 19.1915 5.28593 18.8495L9.9999 16.4393Z" fill="white"/>
                </mask>
                <g mask="url(#mask0)">
                    <path d="M-8.16663 -9.37883C-8.16663 -16.6466 -2.27497 -22.5382 4.99275 -22.5382H25V43.2587H4.99275C-2.27497 43.2587 -8.16663 37.367 -8.16663 30.0993V-9.37883Z" 
                        fill={`url(#half-star${percent})`} />
                </g>
                #
            </svg>
            // <span>hi</span>
            )
        }else{
            nextStar = (
            <span
            className={ i <= props.targetRating ? "filledStar" : "emptyStar" }
            key={ i }
            >


            
            <svg  width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
                     <path fillRule="evenodd" clipRule="evenodd" d="M9.9999 16.4393L14.7139 18.8495C14.9735 18.9823 15.2693 19.0287 15.5576 18.9821C16.3002 18.8619 16.804 18.1672 16.6828 17.4306L15.8286 12.2388L19.5962 8.53657C19.8037 8.33266 19.9397 8.068 19.984 7.78161C20.0982 7.04387 19.5879 6.35396 18.8441 6.24066L13.6022 5.44213L11.2168 0.743866C11.0854 0.485093 10.8736 0.275053 10.6128 0.144728C9.94069 -0.191004 9.1215 0.0772397 8.78303 0.743866L6.39756 5.44213L1.15566 6.24066C0.866949 6.28464 0.600127 6.41949 0.394552 6.62533C-0.135029 7.15558 -0.13098 8.01127 0.403595 8.53657L4.17119 12.2388L3.31699 17.4306C3.26994 17.7165 3.31679 18.0099 3.45062 18.2674C3.79538 18.9309 4.61708 19.1915 5.28593 18.8495L9.9999 16.4393Z" fill="white"/>
                </mask>
                <g mask="url(#mask0)">
                    <path d="M-8.16663 -9.37883C-8.16663 -16.6466 -2.27497 -22.5382 4.99275 -22.5382H25V43.2587H4.99275C-2.27497 43.2587 -8.16663 37.367 -8.16663 30.0993V-9.37883Z"
                        className={ i <= props.targetRating ? "filledStar" : "emptyStar" } />
                </g>
                x
            </svg>

            </span>
            )
        }
        rating.push(
           nextStar
        )
    }

    return (
        <div>
                { rating } 
        </div>
    )
}

export default Stars;