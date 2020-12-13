import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

export class Home extends React.Component {
    state = {
        isLoading: true,
        movies: [],
    }

    getMovies = async () => {

        const {
            data: {
                data: { movies },
            },
        } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
        this.setState({
            movies,
            isLoading: false,
        }); // this.setState({ movies: movies }); state와 지역변수명이 같으면 축약가능
    }

    componentDidMount() { // 렌더링 후 동작
        this.getMovies();
    }

    render() { // 렌더링
        const { isLoading, movies } = this.state;
        return(
            <section className={"container"}>
                { isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div>
                ) : (
                    <div className="movies">
                        {movies.map((movie, index) => (
                            <Movie
                                key={index}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                            />
                        ))}
                    </div>
                )}
            </section>
        );

    }
}
