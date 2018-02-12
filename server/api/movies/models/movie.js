const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const schema = new Schema({
 vote_count: {
   type: Number
 },
 id: {
   type: Number,
   unique: true
 },
 video: {
   type: Boolean
 },
 vote_average: {
   type: Number
 },
 title: {
   type: String
 },
 popularity: {
   type: Number
 },
 poster_path: {
   type: String
 },
 original_language: {
   type: String
 },
 original_title: {
   type: String
 },
 genre_ids: [],
 backdrop_path: {
   type: String
 },
 adult: {
   type: Boolean
 },
 overview: {
   type: String
 },
 release_date: {
   type: String
 }
});

module.exports = mongoose.model('Movie', schema);