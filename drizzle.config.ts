import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql', // 사용할 데이터베이스 종류
  schema: './db/schema.ts', // 테이블을 선언한 스키마 파일의 경로로
  out: './drizzle', // drizzle kit 명령어를 통해 현재의 스키마를 기반으로 생성한 마이그레이션들이 위치할 폴더
});
