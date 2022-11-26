<?php

/**
 *	Entry name：项目名称
 *	Description：项目说明
 *	Author：ZERO-ART
 *	Author Url：http://www.lykep.com
 * 	Contact：708298599  656001878
 *	2019-12-26 19:02:10
 */

class MySQLPDO
{
	//保存PDO实例
	protected static $db = null;

	//初始化
	public function __construct()
	{
		//实例化PDO对象
		self::$db || self::_connect();
	}

	//阻止克隆
	private function __clone()
	{
	}

	/**
	 * 连接目标服务器（只在构造方法中调用一次）
	 * $config 数据库信息数据储存（数组）
	 * self::$db  数据库连接成功返回句柄
	 */
	private static function _connect()
	{
		/*首次被调用时载入配置文件*/
		require __DIR__ . '/config.php';
		//准备PDO的DSN连接信息
		$dsn = "{$config['db']}:host={$config['host']};port={$config['port']};dbname={$config['dbname']};charset={$config['charset']}";
		//连接数据库
		try {
			//连接返回句柄
			self::$db = new PDO($dsn, $config['user'], $config['pass']);
		} catch (PDOException $e) {
			//返回错误信息
			exit('数据库连接失败：' . $e->getMessage());
		}
	}

	/**
	 * 通过预处理方式执行SQL
	 * @param string $sql 执行的SQL语句模板
	 * @param array $data 数据部分
	 * @return object PDOStatement
	 */
	public function query($sql, $data = [])
	{
		//通过预处理方式执行SQL
		$stmt = self::$db->prepare($sql);
		//批量执行
		is_array(current($data)) || $data = [$data];  //自动转换为二维数组
		foreach ($data as $v) {
			if (false === $stmt->execute($v)) {
				exit('数据库操作失败：' . implode('-', $stmt->errorInfo()));
			}
		}
		return $stmt;
	}

	//执行SQL，返回受影响的行数
	public function exec($sql, $data = [])
	{
		return $this->query($sql, $data)->rowCount();
	}

	//取得所有结果
	public function fetchAll($sql, $data = [])
	{
		return $this->query($sql, $data)->fetchAll(PDO::FETCH_ASSOC);
	}

	//取得一行结果
	public function fetchRow($sql, $data = [])
	{
		return $this->query($sql, $data)->fetch(PDO::FETCH_ASSOC);
	}

	//取得一列结果
	public function fetchColumn($sql, $data = [])
	{
		return $this->query($sql, $data)->fetchColumn();
	}

	//最后插入的ID
	public function lastInsertId()
	{
		return self::$db->lastInsertId();
	}
}
