// students-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  const evaluationSchema = new Schema({
    color: { type: String, required: true },
    remark: { type: String },
    author: { type: Schema.Types.ObjectId, ref: 'users' },
    date: { type: Date, required: true }
  });

  const students = new Schema({

    name: { type: String, required: true },
    photo: { type: String, required: true },
    batchId: { type: Schema.Types.ObjectId, ref: 'batches' },
    evaluations: [evaluationSchema],

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('students', students);
};
