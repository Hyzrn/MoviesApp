import React from 'react';
import {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  ActivityIndicator,
  Text,
  View,
} from 'react-native';
import {getMovie} from '../services/services';
import StarRating from 'react-native-star-rating';
import dateFormat from 'dateformat';
import PlayButton from '../components/PlayButton';


const placeholderImage = require('../assets/images/notfound.png');
const height = Dimensions.get('screen').height;

const Detail = ({route}) => {
  const movieId = route.params.movieId;
  const [movieDetail, setMovieDetail] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getMovie(movieId).then(movieData => {
      setMovieDetail(movieData);
      setLoaded(true);
    });
  }, [movieId]);

  return (
    <>
      {loaded && (
        <ScrollView>
          <Image
            resizeMode="stretch"
            style={styles.images}
            source={
              movieDetail.poster_path
                ? {
                    uri:
                      'https://image.tmdb.org/t/p/w500' +
                      movieDetail.poster_path,
                  }
                : placeholderImage
            }
          />
          <View style={styles.container}>
            <View style={styles.playButton}>
              <PlayButton></PlayButton>
            </View>
            <Text style={styles.movieTitle}>{movieDetail.title}</Text>
            {movieDetail.genres && (
              <View style={styles.genresContainer}>
                {movieDetail.genres.map(genre => {
                  return (
                    <Text style={styles.genre} key={genre.id}>
                      {genre.name}
                    </Text>
                  );
                })}
              </View>
            )}
            <StarRating
              disabled={true}
              fullStarColor={'gold'}
              starSize={30}
              maxStars={5}
              rating={movieDetail.vote_average / 2}
            />
            <Text style={styles.overview}>{movieDetail.overview}</Text>
            <Text style={styles.release}>{`Release Date: ${dateFormat(movieDetail.release_date,'dd.mm.yyyy')}`}</Text>
          </View>
        </ScrollView>
      )}
      {!loaded && <ActivityIndicator size="large" color="#00ff00" />}
    </>
  );
};

const styles = StyleSheet.create({
  genresContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  images: {
    height: height / 2,
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  genre: {
    marginRight: 10,
  },
  overview: {
    padding: 15,
  },
  release: {
    fontWeight: 'bold',
  },
  playButton: {
    position: 'absolute',
    top:-30,
    right:15
  }
});

export default Detail;
