# 데이터 명세서

# 테이블 목록
| 테이블명        | 설명     |
| --------------- | -------- |
| body_record     | 체형기록 |
| exercise_info   | 운동정보 |
| exercise_record | 운동기록 |
| goal            | 목표수치 |

# body_record
| 필드     | 타입    | 단위       | 설명                        |
| -------- | ------- | ---------- | --------------------------- |
| reg_dt   | string  | YYYY-MM-DD | 기록일자, 하루 1건          |
| wakeup   | string  | hh:mm      | 기상시각                    |
| weight   | number  | kg         | 체중                        |
| fat      | number  | kg         | 체지방량                    |
| muscle   | number  | kg         | 골격근량                    |
| belly    | number  | cm         | 배둘레                      |
| chest    | number  | cm         | 가슴둘레                    |
| shoulder | number  | cm         | 어깨둘레                    |
| vfl      | number  |            | 내장지방지수                |
| protein  | number  | g          | 섭취 단백질 양              |
| aerobic  | boolean | true/false | 유산소운동(자전거) 완료여부 |
| exercise | boolean | true/false | 근력운동 완료여부           |
| snack    | boolean | true/false | 야식/음주여부               |
| sleep    | string  | HH:MM      | 취침시각                    |
# exercise_info
| 필드        | 타입   | 단위 | 설명                     |
| ----------- | ------ | ---- | ------------------------ |
| id          | number |      | 고유번호                 |
| name        | string |      | 운동 이름                |
| target      | string |      | 목적                     |
| howto       | string |      | 운동 방법                |
| weight_type | string | W/L  | 무게 종류(무거움/가벼움) |
| min_count   | number |      | 세트당 최소 횟수         |
| max_count   | number |      | 세트당 최대 횟수         |
| set_count   | number |      | 세트수                   |
# exercise_record
| 필드        | 타입   | 단위       | 설명                     |
| ----------- | ------ | ---------- | ------------------------ |
| reg_dt      | string | YYYY-MM-DD | 기록일자                 |
| exercise_id | number |            | 운동 id                  |
| weight      | number | kg         | 무게                     |
| count_1     | number |            | 1세트 횟수               |
| count_2     | number |            | 2세트 횟수               |
| count_3     | number |            | 3세트 횟수               |
# goal
| 필드     | 타입    | 단위       | 설명                        |
| -------- | ------- | ---------- | --------------------------- |
| type   | string  | [init,min,goal,challenge] | 목표 종류   |
| weight   | number  | kg         | 체중                        |
| fat      | number  | kg         | 체지방량                    |
| muscle   | number  | kg         | 골격근량                    |
| belly    | number  | cm         | 배둘레                      |
| chest    | number  | cm         | 가슴둘레                    |
| shoulder | number  | cm         | 어깨둘레                    |
| vfl      | number  |            | 내장지방지수                |