module.exports = (sequelize, DataTypes) => {
    const Books = sequelize.define("reviews", {
      title: {
        type: DataTypes.STRING(255),
        comment: '제목'
      },
      contents: {
        type: DataTypes.TEXT,
        comment: '리뷰내용'
      },
      rating: {
        type: DataTypes.INTEGER,
        comment: '평점',
        validate: {
          isEven(value) {
            if (value <= 0 || value > 5) {
              throw new Error('Rating must be at least 1 and below 5');
            }
          }
        },
      },
    }, {
      charset: "utf8", // 한국어 설정
      collate: "utf8_general_ci", // 한국어 설정
      tableName: "reviews", // 테이블 이름
      timestamps: true, // createAt & updateAt 활성화
      paranoid: true, // timestamps 가 활성화 되어야 사용 가능 > deleteAt 옵션 on
    });
  
    return Books;
  };