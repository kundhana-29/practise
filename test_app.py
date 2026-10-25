import unittest
from app import sum
class test_sum(unittest.TestCase):
    def test_sum(self):
        self.assertEqual(sum(10, 20), 30)

if __name__ == '__main__':
    unittest.main()