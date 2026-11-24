# 데이터 명세서
# 체형기록
| 필드     | 타입    | 단위       | 설명                        |
| -------- | ------- | ---------- | --------------------------- |
| reg_dt   | string  | YYYY-MM-DD | 기록일자, 하루 1건          |
| wakeup   | string  | HH:MM      | 기상시각                    |
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
# 운동정보
| 필드        | 타입   | 단위 | 설명                     |
| ----------- | ------ | ---- | ------------------------ |
| id          | number |      | 고유번호                 |
| name        | string |      | 운동 이름                |
| target      | string |      | 목적                     |
| weight_type | string | W/L  | 무게 종류(무거움/가벼움) |
| min_count   | number |      | 세트당 최소 횟수         |
| max_count   | number |      | 세트당 최대 횟수         |
| set_count   | number |      | 세트수                   |
# 목표수치
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