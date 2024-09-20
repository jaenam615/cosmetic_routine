import { DataSource } from 'typeorm';
import { SkinAttribute } from './entities/skin-attribute.entity'; // Adjust the import path as necessary
import { Item } from './entities/item.entity';
import { AppDataSource } from './config/ormconfig'; // Adjust the import path as necessary

const seedDatabase = async () => {
    try {
        // Initialize the data source
        await AppDataSource.initialize();

        // Preload data
        const skinAttributeRepository = AppDataSource.getRepository(SkinAttribute);
        const itemRepository = AppDataSource.getRepository(Item);
        // Example data
        const attributes = [
            { attr_key: 1, attr_name: '건성' },
            { attr_key: 2, attr_name: '중성' },
            { attr_key: 3, attr_name: '지성' },
            { attr_key: 4, attr_name: '복합성' },
            { attr_key: 5, attr_name: '수부지' },
            { attr_key: 6, attr_name: '봄웜톤' },
            { attr_key: 7, attr_name: '여름쿨톤' },
            { attr_key: 8, attr_name: '가을웜톤' },
            { attr_key: 9, attr_name: '겨울쿨톤' },
            { attr_key: 10, attr_name: '아토피' },
            { attr_key: 11, attr_name: '여드름' },
            { attr_key: 12, attr_name: '민감성' },
            { attr_key: 13, attr_name: '홍조' },
            { attr_key: 14, attr_name: '각질' },
            { attr_key: 15, attr_name: '속건조' },
            { attr_key: 100, attr_name: '잘 모르겠어요' },
        ];

        // Insert data if it does not already exist
        await skinAttributeRepository.save(attributes);


        const items = [
            { item_key: 1, item_name: 'testItem1', brand_name: 'brand1', volume: 10, item_price: 1000, description: '테스트 아이템입니다.', category: '지성' },
            { item_key: 2, item_name: 'testItem2', brand_name: 'brand2', volume: 50, item_price: 10000, description: '테스트 아이템입니다.', category: '건성' },
            { item_key: 3, item_name: 'testItem3', brand_name: 'brand3', volume: 100, item_price: 20000, description: '테스트 아이템입니다.', category: '지성' },
        ];


        await itemRepository.save(items);

        console.log('Database seeded with skin attributes!');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        // Close the connection
        await AppDataSource.destroy();
    }
};

seedDatabase();
