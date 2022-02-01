//조회수 함수 구현

import moment from 'moment';
import 'moment/locale/ko';



//과제
// from함수를 상요해 업로드 시간과 특정 시간과의 차이를 리턴하는 함수 만들기 
function ProcessViewCount(viewCount){
    if(viewCount<1000){
        return `조회수 ${viewCount}회`;
    }else if(viewCount<10000){
        return `조회수 ${(viewCount / 1000).toFixed(1)}천회`;
    }else if(viewCount<100000){
        return `조회수 ${(viewCount / 10000).toFixed(1)}만회`;
    }else if(viewCount<100000000){
        return `조회수 ${(viewCount / 10000).toFixed(0)}만회`;
    }else{
        return `조회수 ${(viewCount / 100000000).toFixed(0)}억회`;
    }
}


function ProcessUploadDate(data){
    
    const date = moment(data);
    const standard = moment('2021-09-16T13:15:02');
    return `${date.from(standard)}`;
}

export {ProcessViewCount, ProcessUploadDate};