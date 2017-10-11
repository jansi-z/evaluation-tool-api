// evaluations-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const evaluations = new Schema({
    studentId: { type: Schema.Types.ObjectId, ref: 'students', required: true },
    authorId: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    date: { type: Date },
    color: { type: String },
    remark: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('evaluations', evaluations);
};
