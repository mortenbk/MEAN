var mongoose = require("mongoose");

var courseSchema = mongoose.Schema({
    title: {type: String, required: "{Path} is required"},
    featured: {type: Boolean, required: "{Path} is required"},
    published: {type: Date, required: "{Path} is required"},
    tags: [String]
});

var Course = mongoose.model("Course", courseSchema);

function createDefaultCourses() {
    Course.find({}).exec(function(err, collection) {
        if(collection.length === 0) {
            Course.create({title: "First course", featured: false, published: new Date(), tags: ["A Tag", "Another tag"]});
            Course.create({title: "Second course", featured: true, published: new Date(), tags: ["A Tag"]});
            Course.create({title: "Third course", featured: true, published: new Date(), tags: ["A Tag"]});
            Course.create({title: "Fourth course", featured: false, published: new Date(), tags: ["A Tag", "Another tag"]});
            Course.create({title: "Fifth course", featured: false, published: new Date(), tags: ["A Tag"]});
            Course.create({title: "Sixth course", featured: false, published: new Date(), tags: ["A Tag"]});
            Course.create({title: "Seventh course", featured: false, published: new Date(), tags: ["A Tag"]});
            Course.create({title: "Eighth course", featured: true, published: new Date(), tags: ["A Tag"]});
            Course.create({title: "Ninth course", featured: false, published: new Date(), tags: ["A Tag"]});
            Course.create({title: "Tenth course", featured: false, published: new Date(), tags: ["A Tag"]});
            Course.create({title: "Twelfth course", featured: false, published: new Date(), tags: ["A Tag"]});
            Course.create({title: "Thirteenth course", featured: false, published: new Date(), tags: ["A Tag"]});
            Course.create({title: "a title", featured: true, published: new Date(), tags: ["A Tag", "Another tag"]});
            Course.create({title: "a title", featured: false, published: new Date(), tags: ["A Tag"]});
            Course.create({title: "a title", featured: false, published: new Date(), tags: ["A Tag"]});
            Course.create({title: "a title", featured: false, published: new Date(), tags: ["A Tag"]});
            Course.create({title: "a title", featured: true, published: new Date(), tags: ["A Tag"]});
            Course.create({title: "a title", featured: true, published: new Date(), tags: ["A Tag", "Another tag"]});
            Course.create({title: "a title", featured: false, published: new Date(), tags: ["A Tag"]});
            Course.create({title: "a title", featured: false, published: new Date(), tags: ["Another tag"]});


        }
    });
}

exports.createDefaultCourses = createDefaultCourses;